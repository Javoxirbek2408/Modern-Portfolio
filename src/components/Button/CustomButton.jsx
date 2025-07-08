import { Button } from "antd";

export const CustomButton = ({ title, starIcon, className }) => {
  return (
    <Button className={className} starIcon={starIcon}>
      {title}
    </Button>
  );
};
