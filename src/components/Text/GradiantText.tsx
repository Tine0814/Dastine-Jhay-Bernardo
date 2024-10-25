import { ReactNode } from "react";

interface Props {
  childeren: ReactNode | string;
}
const GradiantText = ({ childeren }: Props) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
      {childeren}
    </span>
  );
};

export default GradiantText;
