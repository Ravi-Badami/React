Q8. Scoreboard
Build a multiplayer scoreboard for 3 players. Each player has their own + button.

State: array of { id, name, score }

Action: INCREASE_SCORE with payload: { id }

Goal: Update one item in an array without mutating.

Q9. Async Data Fetching States
Simulate fetching user data with 3 states: loading, success, error.

State: { status: 'idle', data: null, error: null }

Actions: FETCH_START, FETCH_SUCCESS, FETCH_ERROR

Goal: Model async lifecycle (loading → success/error pattern) with useReducer.

Q10. Multi-Step Form
Build a 3-step form: Personal Info → Address → Review.

State: { step: 1, name: '', email: '', city: '' }

Actions: NEXT_STEP, PREV_STEP, SET_FIELD

Goal: Manage multi-page UI state in one reducer.

🔴 Level 4 — Advanced
Q11. Bank Account
Build a bank account app with deposit, withdrawal, and loan.

State: { balance: 0, loan: 0, isOpen: false }

Actions: OPEN_ACCOUNT, DEPOSIT, WITHDRAW, REQUEST_LOAN, PAY_LOAN, CLOSE_ACCOUNT

Rules: Can't withdraw more than balance, can't take a second loan, can only close with zero balance.

Q12. Undo / Redo Counter
Build a counter where you can undo and redo your last actions.

State: { past: [], present: 0, future: [] }

Actions: INCREMENT, DECREMENT, UNDO, REDO

Goal: Understand the history stack pattern.

Q13. useReducer + useContext
Take your Todo List from Q4–Q5 and lift the state globally using useContext.

Create a TodoContext that provides state and dispatch to child components.

Goal: This is the core pattern used before Zustand/Redux was popular.

Q14. Reducer with Lazy Initialization
Build a quiz app that loads 5 questions from a local data array on init using the init function (third argument of useReducer).

State: { questions, index: 0, answer: null, points: 0, status: 'ready' }

Actions: START, NEW_ANSWER, NEXT_QUESTION, FINISH

Goal: Use init to avoid recreating state on every render.

Q15. Mini Redux Clone
Write your own createStore(reducer, initialState) function using only useReducer and useContext. Expose state, dispatch, and getState — just like Redux.

Goal: Understanding this means you truly understand useReducer.