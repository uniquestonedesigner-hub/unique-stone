import Button from "./Button";

const ButtonGroup = ({
  buttons = [],
  className = "",
  orientation = "horizontal",
}) => {
  const orientationStyles =
    orientation === "vertical" ? "flex-col space-y-2" : "flex-row space-x-2";

  return (
    <div className={`flex ${orientationStyles} ${className}`}>
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default ButtonGroup;
