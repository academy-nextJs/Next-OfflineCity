import {Button} from "@heroui/react";

interface IProps {
    children: React.ReactNode;
    className:string;
}

  const  BlueButton = ({children , className}:IProps) =>  {
  return (
    <Button
      className={className}
      radius="full"
    >
      {children}
    </Button>
  );
}

export default BlueButton

