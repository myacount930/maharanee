export const CustomInput = (props: any) => {
  return (
    <div className="  relative h-11 w-full ">
      <div className="absolute left-0 top-[50%] translate-y-[-50%]  ml-4 ">
        {props.icon}
      </div>
      <input
      
        {...props}
        className="peer  h-full w-full border-b border-blue-gray-200 bg-transparent p-4 pb-1.5 font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <label className=" px-2   after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {props.placeholder}
      </label>
    </div>
  );
};
