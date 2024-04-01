import Spinner from "./React-Spinner/React-Spinner";
function Fallback() {
  return (
    <div className="flex justify-center bg-black items-center min-h-screen">
      <Spinner />
    </div>
  );
}
export default Fallback;
