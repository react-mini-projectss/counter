import Counter from "./components/Counter";

export default function HomePage() {
  return (
    <main className="main-container">
      <h1>Counter Component Demonstration</h1>

      <section className="section-block">
        <h2>Example :- (initial: 10)</h2>
        <Counter initial={10} />
      </section>

      {/* Uncomment to test TS errors */}

      {/*
      <section className="section-block">
        <h2>Error Example (initial: 'five')</h2>
        <Counter initial="five" /> 
      </section>
      */}

      {/*
      <section className="section-block">
        <h2>Error Example (Missing 'initial')</h2>
        <Counter /> 
      </section>
      */}
    </main>
  );
}
