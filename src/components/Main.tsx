import { Top } from "./Top";
import { Middle } from "./Middle";

export const Container = () => {
  return (
    <div className="mt-4 english">
      <Top />
      <hr className="border-1 my-7" />
      <Middle />
    </div>
  );
};
