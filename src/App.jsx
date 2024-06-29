import Skeleton from "./Skeleton/Skeleton";

function App() {
  return (
    <>
      <div className="prew">
        <div>
          <Skeleton.Avatar size={"xxl"} />
          <Skeleton.Avatar size={"xl"} />
          <Skeleton.Avatar size={"md"} />
          <Skeleton.Avatar size={"sm"} />
        </div>
        <div>
          <Skeleton.Text br={true} size={"title"} />
          <Skeleton.Text br={true} size={"body"} />
          <Skeleton.Text br={false} size={"footer"} />
        </div>
      </div>
      <div className="prew">
        <div>
          <Skeleton.Avatar anim={true} size={"xxl"} />
          <Skeleton.Avatar anim={true} size={"xl"} />
          <Skeleton.Avatar anim={true} size={"md"} />
          <Skeleton.Avatar anim={true} size={"sm"} />
        </div>
        <div>
          <Skeleton.Text anim={true} br={true} size={"title"} />
          <Skeleton.Text anim={true} br={true} size={"body"} />
          <Skeleton.Text anim={true} br={false} size={"footer"} />
        </div>
      </div>
    </>
  );
}
export default App;
