Let's walk through your code **line by line** like a story — what's actually happening at each moment.

## The Two Memory Types React Gives You

Your component uses two kinds of memory, and understanding the difference is everything: [dev](https://dev.to/learnwithparam/useref-helps-you-to-avoid-re-rendering-of-the-component-39jn)

| | `useState` | `useRef` |
|---|---|---|
| Triggers re-render? | ✅ Yes | ❌ No |
| Survives re-renders? | ✅ Yes | ✅ Yes |
| Used for | Things the **screen needs to show** | Things only **your code needs** |

In your code: `time` goes on screen → `useState`. The interval ID never goes on screen → `useRef`. [stackoverflow](https://stackoverflow.com/questions/63652761/react-useref-not-updating-and-rendering-new-values)

## What Happens When You Click Start

```js
const handleStart = () => {
  if (intervalRef.current) return;        // LINE A
  intervalRef.current = setInterval(() => {  // LINE B
    setTime(prev => prev + 10);          // LINE C
  }, 10);
};
```

- **LINE A** — `intervalRef.current` starts as `null`. If it's already holding an ID (timer already running), bail out. This prevents two intervals stacking on top of each other
- **LINE B** — `setInterval` is like hiring a worker who knocks on your door every 10ms. It returns a **numeric ID** (like a receipt)  — e.g. `42`. You store that receipt in `intervalRef.current` [sitepoint](https://www.sitepoint.com/community/t/id-returned-by-setinterval/21831)
- **LINE C** — Every knock, `setTime` fires. The `prev => prev + 10` form is used because the interval is a "closed-off" environment — it can't see the latest `time` value directly, but `prev` always gives you the real current value [react](https://react.dev/reference/react/useState)

## What Happens After `setTime` Fires

This is the key React magic. Every time `setTime(prev => prev + 10)` runs: [joshwcomeau](https://www.joshwcomeau.com/react/why-react-re-renders/)

```
setTime called
    → React sees state changed
    → React re-renders your component (calls your function again)
    → formatTime(time) runs with new time value
    → Screen updates with new number
    → (repeat 100 times a second)
```

The `intervalRef` box is untouched during all of this. React re-renders the component but the ref's `.current` value survives intact. [stackoverflow](https://stackoverflow.com/questions/65016565/react-changing-useref-current-value-of-ref-not-triggering-useeffect)

## What Happens When You Click Stop

```js
const handleStop = () => {
  clearInterval(intervalRef.current);  // fires the worker
  intervalRef.current = null;          // throw away the receipt
};
```

You hand `clearInterval` the ID you stored (`intervalRef.current`). JavaScript finds that specific interval and kills it. Setting it back to `null` resets the guard in `handleStart`. [sitepoint](https://www.sitepoint.com/community/t/id-returned-by-setinterval/21831)

## What `formatTime` is Doing

## Walkthrough With `ms = 75430`

Think of it like breaking a number into containers — biggest container first.

## Minutes

```
75430 / 60000 = 1.257...
Math.floor(1.257) = 1 ✅
```

→ **1 full minute** used up. But 1 minute = 60000ms, so `60000ms` is consumed.

## Seconds
```
75430 % 60000 = 15430   ← "what's LEFT after removing full minutes?"
15430 / 1000  = 15.43
Math.floor(15.43) = 15 ✅
```

The `%` (modulo) operator means **remainder**. After taking out 1 full minute, you have `15430ms` left. Divide by 1000 to convert ms → seconds → **15 seconds**.

## Milliseconds
```
75430 % 1000 = 430      ← "what's LEFT after removing full seconds?"
430 / 10     = 43
Math.floor(43) = 43 ✅
```

After taking out full seconds, `430ms` remains. Divide by 10 to get centiseconds (2-digit ms) → **43**.

## `padStart`

```
String(1).padStart(2, '0')  → "01"
String(15).padStart(2, '0') → "15"
String(43).padStart(2, '0') → "43"
```

`padStart(2, '0')` means _"make sure this string is at least 2 characters — if not, pad with `0` on the left"_.

## Final Result

```
"01:15.43"
```

***

## The Logic in Plain English

```
ms = 75430

Step 1 → How many FULL minutes fit in 75430ms?     → 1
Step 2 → What's LEFT after removing those minutes? → 15430ms → 15 seconds
Step 3 → What's LEFT after removing those seconds? → 430ms   → 43 centiseconds

Display → 01:15.43
```

Every step, `%` removes what the previous step already counted, so you never double-count anything.


## What `useEffect` is Doing

```js
useEffect(() => {
  return () => clearInterval(intervalRef.current);
}, []);
```

- The `[]` means this runs **once when the component mounts**, and never again
- The `return () => ...` is a **cleanup function** — React calls it when the component is **removed from the page**
- Without this, if the user navigates away mid-run, the interval keeps ticking invisibly in the background forever, eating memory [dev](https://dev.to/learnwithparam/useref-helps-you-to-avoid-re-rendering-of-the-component-39jn)

## The Full Story in One Picture

```
Click Start
    → setInterval hired, ID saved in intervalRef.current
        → every 10ms: setTime fires
            → React re-renders
                → formatTime converts ms → "00:01.43"
                    → screen updates

Click Stop
    → clearInterval(intervalRef.current) kills the worker
    → intervalRef.current = null (reset the receipt)

Click Reset
    → same as Stop + setTime(0) → screen back to "00:00.00"
```

You actually understand this code now — you just needed it mapped out. Want to add laps next?