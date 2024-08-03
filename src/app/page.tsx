"use client";
import { ContcatForm } from "@/components/ContactForm";
import Loading from "@/components/loading";
import { Success } from "@/components/Success";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handelinput = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = async (e: any) => {
    setLoading(true);

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data);
      setErrorMsg(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-primary min-h-screen">
      <div className=" w-fit m-auto   flex flex-col gap-8   p-4">
        <div className=" relative w-full   h-[25vh] ">
          <Image
            src="/logo2.png"
            alt=""
            className="  object-contain p-8"
            fill
          />
        </div>
        <div className="   w-full  px-6 py-8 border m-auto  border-black/5  bg-white rounded-[2.1rem]   shadow-[0px_0px_19px_0px_#ffff]  shadow-white">
          <div className="  place-content-end">
            <DescriptionComponent title="حلول الرهن العقاري" />
            <DescriptionComponent title="حلول لمستفيدي الصندوق العقاري" />
            <DescriptionComponent title="الاعفاء في حاله العجز او الوفاه لاسمح الله" />
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-4  w-fll">
          <div
            className="`  col-span-2 rounded-3xl
          font-medium text-lg  text-[#003e61] items-center flex justify-center max-w-sm mx-auto  gap-4 p-4 border w-full border-black/5  bg-white   shadow-[0px_0px_19px_0px_#ffff]  shadow-white"
          >
            <h1>تواصل معنا للحصول على استشارة مجانية</h1>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=966543071102"
            className="`  rounded-3xl
          font-medium text-sm  text-[#006a3e96] items-center flex justify-center max-w-sm mx-auto  gap-4 p-4 border w-full border-black/5  bg-white   shadow-[0px_0px_19px_0px_#ffff]  shadow-white"
          >
            whatsapp
            <FaWhatsapp size={40} />
          </a>
          <a
            href="tel:0543071102"
            className="`  rounded-3xl
         font-medium text-sm  text-[#f38951]  items-center flex justify-center max-w-sm mx-auto  gap-4 p-4 border w-full border-black/5  bg-white   shadow-[0px_0px_19px_0px_#ffff]  shadow-white"
          >
            الاتصال مباشره
            <LuPhoneCall size={35} />
          </a>
        </div>

        <div className="  px-6 py-8 border w-fit m-auto  border-black/5  bg-white rounded-[2.1rem]   shadow-[0px_0px_19px_0px_#ffff]  shadow-white">
          <h1 className=" text-gray-400 font-semibold  mb-6">
            للحصول على خدمة اسرع سجل معلوماتك وقدم الان
          </h1>
          <div className="flex items-center gap-4">
            {errorMsg !== "Email sent successfully" ? (
              <ContcatForm
                errorMsg={errorMsg}
                onClick={handelSubmit}
                onChange={handelinput}
                value={formData}
              />
            ) : (
              <Success />
            )}
          </div>
        </div>
      </div>
      {loading && (
        <div className=" fixed   h-screen z-[999]    top-0 transform  bg-[#00000089] w-full  grid place-items-center">
          <Loading />
        </div>
      )}
    </section>
  );
}

const DescriptionComponent = ({ title }: { title: string }) => {
  return <li className=" text-[#003e61]  text-sm my-[6px]">{title}</li>;
};
