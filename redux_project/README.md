User Action (e.g., click "Add Todo")
        ↓
dispatch(addTodo("Buy milk"))
        ↓
Reducer (handles the 'addTodo' action, updates state)
        ↓
Redux Store (holds the new state)
        ↓
useSelector() detects state change
        ↓
React Component re-renders with updated state
