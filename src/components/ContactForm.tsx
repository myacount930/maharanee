import { FaPhone, FaUser } from "react-icons/fa";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { banks, work } from "./banks";
import { TiArrowUnsorted } from "react-icons/ti";
import { ReuseableButton } from "./ReuseableButton";

export const ContcatForm = (props: any) => {
  return (
    <div className=" flex flex-col gap-8 lg:p-12 ">
      <CustomInput
        onChange={props.onChange}
        value={props.value.fullName}
        name="fullName"
        placeholder="الاسم الكامل"
      />
      <CustomInput
        maxLength={10}
        onChange={props.onChange}
        value={props.value.phoneNumber}
        placeholder="رقم الهاتف"
        name="phoneNumber"
      />
      <CustomInput
        onChange={props.onChange}
        value={props.value.salary}
        name="salary"
        placeholder="الراتب"
      />
      <CustomSelect
        onChange={props.onChange}
        value={props.value.bank}
        name="bank"
        placeholder="البنك"
        data={banks}
        icon={<TiArrowUnsorted size={20} className=" text-gray-700" />}
      />
      <CustomSelect
        onChange={props.onChange}
        value={props.value.work}
        name="work"
        placeholder="قطاع العمل"
        data={work}
        icon={<TiArrowUnsorted size={20} className=" text-gray-700" />}
      />
      <p className=" text-xs text-red-400">{props.errorMsg}</p>
      <ReuseableButton onClick={props.onClick} />
    </div>
  );
};
