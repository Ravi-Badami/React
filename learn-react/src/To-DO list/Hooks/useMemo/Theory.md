🟢 Beginner
These projects teach the fundamental concept: memoize an expensive computation so it doesn't re-run on every render.

1. Slow Number Cruncher
   Build a counter that runs a heavy loop (e.g., summing 1 to N with a for loop up to 1 billion iterations) alongside a completely unrelated button (like a theme toggle). Without useMemo, the heavy calc re-runs on every toggle click. Wrap it with useMemo(() => heavyCalc(n), [n]) and observe via console.log that the calc only fires when n changes.

Concept drilled: Basic memoization, dependency array, preventing redundant recalculations.

2. Prime Number Finder
   Input a number N and display all prime numbers from 2 to N. Add a live clock (re-renders every second via setInterval). Without useMemo, prime calculation re-runs every second. Wrap the prime logic in useMemo so it only recalculates when N changes.

Concept drilled: How re-renders from unrelated state trigger expensive functions — and how useMemo isolates them.

3. Filtered Todo List
   Maintain a list of todos and a search input. Compute the filtered list using useMemo(() => todos.filter(...), [todos, query]). Add a separate counter state (e.g., a click counter) to prove the filter doesn't re-run when unrelated state changes.

Concept drilled: Memoizing derived data from arrays, multi-value dependency arrays.

🟡 Intermediate
These projects involve referential equality and memoizing objects/arrays passed as props.

4. Word Frequency Analyzer
   Take a large paragraph of text as input and display a word-frequency map (each word → count). Since building this map is O(n), memoize it with useMemo(() => buildFrequencyMap(text), [text]). Add a font-size slider as a separate state to trigger re-renders and verify the map isn't rebuilt on slider change.

Concept drilled: Memoizing object construction, using useMemo for derived data structures.

5. Sortable & Filterable Product Table
   Render a list of ~500 mock products. Provide sort (by price, name) and filter (by category) controls. Memoize the resulting sorted+filtered array: useMemo(() => products.filter(...).sort(...), [products, sortKey, filterCategory]).

Concept drilled: Chaining operations inside useMemo, multiple dependencies, real-world data pipeline pattern.

6. Referential Equality Demo
   Create a Chart child component wrapped in React.memo. Pass a config object (labels, colors) computed in the parent. Without useMemo, the object is recreated on every render (new reference = child always re-renders). Memoize the config object and watch the child stop re-rendering.

Concept drilled: Referential equality of objects — the other major reason to use useMemo beyond performance.

🔴 Advanced
These projects require useMemo for multi-stage pipelines, memoized selectors, or complex dependency chains.

7. Real-Time Data Dashboard
   Fetch a large JSON dataset (e.g., mock stock prices or COVID data). Provide controls: date range filter, category filter, aggregate function (sum/avg/max). Chain multiple useMemo calls — first filter the data, then aggregate it, then format it for display. Each stage only recomputes when its dependencies change.

js
const filtered = useMemo(() => filterData(raw, dateRange), [raw, dateRange]);
const aggregated = useMemo(() => aggregate(filtered, method), [filtered, method]);
const formatted = useMemo(() => format(aggregated), [aggregated]);
Concept drilled: Memoized selector chains, minimizing cascading recalculations.

8. Text Diff Viewer
   Given two large text inputs (left and right), compute a line-by-line diff (which lines were added, removed, unchanged). The diff algorithm is expensive — memoize it: useMemo(() => computeDiff(left, right), [left, right]). Add a color-theme picker as unrelated state to stress-test isolation.

Concept drilled: Memoizing algorithmically complex output, validating memoization with React DevTools Profiler.

9. Multi-Filter Analytics Board
   Build a mini analytics UI: a table of 1000+ user records with 4+ simultaneous filters (age range, country, status, signup date). Memoize the filtered result, then from that memoized value, derive summary stats (total count, avg age, etc.) in a second useMemo. Add a completely unrelated live timer to confirm nothing reruns unnecessarily.

Concept drilled: Dependent useMemo chains, performance measurement, understanding when not to memoize (simple computations don't need it).