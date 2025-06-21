import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Paper: React.FC<Props> = ({ children }) => {
  return (
    <div id="paper" className="paper">
      {children}
    </div>
  );
};

export default Paper;
