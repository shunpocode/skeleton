import "./skeleton.css";
import React from "react";
const SkeletonContext = React.createContext();

export default function Skeleton(props) {
  return (
    <SkeletonContext.Provider value={props}>
      <div
        className={`skeleton${props.anim !== true ? "" : "__anim"} skeleton-${
          props.type
        } ${props.size}${props.br !== true ? "" : " sk-text-multi"}`}
      ></div>
    </SkeletonContext.Provider>
  );
}

const sizes = {
  avatar: ["xxl", "xl", "md", "sm"],
  text: ["title", "body", "footer"],
};

function Avatar({ anim, br, size }) {
  var currentSize;
  if (size !== undefined) {
    const count = sizes.avatar.length;
    for (let i = 0; i < count; i++) {
      if (size === sizes.avatar[i]) {
        currentSize = sizes.avatar[i];
      } else if (i === count) {
        currentSize = "md";
      }
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
    const count = sizes.text.length;

    for (let i = 0; i < count; i++) {
      if (size === sizes.text[i]) {
        currentSize = sizes.text[i];
      } else if (i === count) {
        currentSize = "skeleton-text__title";
      }
    }
    size = `skeleton-text__${currentSize}`;
  } else {
    size = `skeleton-text__title`;
  }
  return <Skeleton type={"text"} anim={anim} br={br} size={size} />;
}

Skeleton.Avatar = Avatar;
Skeleton.Text = Text;
