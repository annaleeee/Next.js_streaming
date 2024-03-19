import { Suspense } from 'react';
import Sub from './first';
 
export default function Page() {
  return (
    <section>
      <h3>First section</h3>
      <br></br>
      <Suspense fallback={<p>Loading...</p>}>
        <Sub />
      </Suspense>
      <br></br>
      <h3>Second section</h3>
    </section>
  );
}