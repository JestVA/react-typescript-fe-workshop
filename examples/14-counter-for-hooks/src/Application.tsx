import { useState, ChangeEvent } from 'react';
const inc = (count: number) => {
  return count++;
};
const dec = (count: number) => {
  return count--;
};
const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">0</p>
      <section className="controls">
        <button onClick={() => setCount(inc)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(dec)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={changeCount}
          />
          <input type="submit" onChange={(e) => setCount(+e.target.value)} />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
