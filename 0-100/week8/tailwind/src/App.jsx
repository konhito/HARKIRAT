import RevnueCard from "./components/RevnueCard";
export default function App() {
  return (
    <>
      <div className="grid grid-cols-3">
        {/* <div className="flex justify-between">
          <div className="bg-red-600">hii</div>
          <div className="bg-blue-600">hii</div>
          <div className="bg-green-600">hii</div>
        </div>
        <div className=" grid grid-cols-10">
          <div className="col-span-4 bg-red-600">hii</div>
          <div className="col-span-4 bg-blue-600">hii</div>
          <div className="col-span-2 bg-green-600">hii</div>
        </div>
        {/* in flexbox diffrent width */}
        {/* <div className=" flex">
          <div className="w-[40%] bg-red-600">hii</div>
          <div className="w-[40%] bg-blue-600">hii</div>
          <div className="w-[20%] bg-green-600">hii</div>
        </div> */}
        {/* <div className="bg-red-600 sm:bg-green-500 md:bg-blue-600 lg:bg-yellow-500">
          hii
        </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="bg-green-500">hii</div>
          <div className="bg-red-500">hii</div>
          <div className="bg-yellow-500">hii</div>
        </div> */}
        <RevnueCard
          title={"Amount pending"}
          orderCount={23}
          amount={"23,232"}
        />
      </div>
    </>
  );
}
