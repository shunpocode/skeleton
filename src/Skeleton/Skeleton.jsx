import React from "react";
const SkeletonContext = React.createContext();

export default function Skeleton(props) {
  return (
    <SkeletonContext.Provider value={props}>
      <div
        className={`skeleton${props.anim !== true ? "" : "__anim"} skeleton-${props.type} ${props.size}${props.br !== true ? "" : " sk-text-multi"}`}
      ></div>
    </SkeletonContext.Provider>
  );
}
function Avatar({ anim, br, size }) {
  var currentSize;
  if (size !== undefined) {
    switch (size) {
      case "xxl":
        currentSize = "xxl";
        break;
      case "xl":
        currentSize = "xl";
        break;
      case "md":
        currentSize = "md";
        break;
      case "sm":
        currentSize = "sm";
        break;
      default:
        currentSize = "md";
        break;
    }
    size = `sk-avatar-${currentSize}`;
  } else {
    size = `sk-avatar-md`;
  }
  return <Skeleton type={"avatar"} anim={anim} br={br} size={size} />;
}
function Text({ anim, br, size }) {
  var currentSize;
  if (size !== undefined) {
    switch (size) {
      case "title":
        currentSize = "text__body";
        break;
      case "body":
        currentSize = "text__body";
        break;
      case "footer":
        currentSize = "footer";
        break;
      default:
        break;
    }
    size = `skeleton-${currentSize}`;
  }
  return <Skeleton type={"text"} anim={anim} br={br} size={size} />;
}

Skeleton.Avatar = Avatar;
Skeleton.Text = Text;
