import { CommentsProps } from "@/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import React, { FC, useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import CreateCommentsModal from "../CreateComments/CreateCommentsModal";
import { motion } from "framer-motion";

interface props {
  Commets: CommentsProps;
}

const commentsVArients = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CommentsMobileModal({ Commets }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [commetsReply, setCommentsReply] = useState<boolean>(false);

  console.log("Commetsberarrr", Commets);

  return (
    <>
      <Tooltip content="برای مشاهده کامنت ها کلیک کنید">
        <button
          onClick={onOpen}
          className="md:hidden border border-[#7474fefe] rounded-[100px] py-2 px-4 text-[#7474fefe]"
        >
          نظرات{" "}
        </button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                کامنت های شما
              </ModalHeader>
              <ModalBody>
                <div className="bg-[#f9f9f9] dark:bg-zinc-800 ">
                  {Commets.map((Commets: any) => (
                    <motion.li
                      variants={commentsVArients}
                      className=" grid grid-cols-1 p-6 border-b-1 dark:border-zinc-900 border-[#efefef] duration-300 hover:bg-[#7575fefe] hover:text-white transform hover:scale-110"
                    >
                      <div className="flex gap-2">
                        <div className="w-11 h-11 rounded-full bg-slate-400 ">
                          {" "}
                        </div>
                        <span className="flex items-center ">
                          {" "}
                          <h1 className="">
                            {" "}
                            {Commets?.user?.firstName}{" "}
                          </h1>{" "}
                          <span className="text-[#7575fefe]"> در </span>{" "}
                          <span className="text-[14px] text-[#1e1e1e] dark:text-white">
                            {Commets?.created_at}
                          </span>{" "}
                        </span>
                      </div>

                      <div
                        className={`pr-3 mr-5 ${
                          commetsReply ? "border-r-2 border-blue-400" : ""
                        } `}
                      >
                        <p className="pt-2">{Commets?.title}</p>
                        <div className="flex gap-6 pt-3 ">
                          <span className="flex gap-1 text-[#7575fefe]">
                            {" "}
                            {Commets?.rating} <IoHeartCircleOutline size={20} />{" "}
                          </span>
                          <button
                            className="text-[#7575fefe] font-bold text-[14px]"
                            onClick={() =>
                              console.log("1111111", Commets?.parent_comment)
                            }
                          >
                            <CreateCommentsModal title="کامنت شما"/>
                          </button>
                          {Commets.parent_comment_id && (
                            <div>
                              <button
                                className="text-[#8e8e8e] font-bold text-[14px] flex gap-1"
                                onClick={() => setCommentsReply(!commetsReply)}
                              >
                                مشاهده {Commets?.parent_comment_id} پاسخ{" "}
                                <IoIosArrowDown className="mt-1" />{" "}
                              </button>
                            </div>
                          )}
                        </div>
                        {commetsReply &&
                          Commets?.parent_comment &&
                          Commets.parent_comment_id ===
                            Commets.parent_comment.id && (
                            <div className="pr-4 pt-8">
                              <div className="flex gap-2">
                                <div className="w-11 h-11 rounded-full bg-slate-400 ">
                                  {" "}
                                </div>
                                <span className="flex items-center">
                                  {" "}
                                  <h1 className="">
                                    {" "}
                                    {Commets?.user?.firstName}{" "}
                                  </h1>{" "}
                                  <span className="text-[#7575fefe]"> در </span>{" "}
                                  <span className="text-[14px] text-[#1e1e1e] dark:text-white">
                                    {Commets?.created_at}
                                  </span>{" "}
                                </span>
                              </div>
                              <p className="pt-2">{Commets?.title}</p>
                              <div className="flex gap-6 pt-3 ">
                                <span className="flex gap-1 text-[#7575fefe]">
                                  {" "}
                                  {Commets?.rating}{" "}
                                  <IoHeartCircleOutline size={20} />{" "}
                                </span>
                                <button
                                  className="text-[#7575fefe] font-bold text-[14px]"
                                  onClick={() =>
                                    console.log(
                                      "1111111",
                                      Commets?.parent_comment
                                    )
                                  }
                                >
                                  <CreateCommentsModal  title="کامنت شما"/>
                                </button>
                                {Commets.parent_comment_id && (
                                  <div>
                                    <button
                                      className="text-[#8e8e8e] font-bold text-[14px] flex gap-1"
                                      onClick={() =>
                                        setCommentsReply(!commetsReply)
                                      }
                                    >
                                      مشاهده {Commets?.parent_comment_id} پاسخ{" "}
                                      <IoIosArrowDown className="mt-1" />{" "}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </motion.li>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  خروج
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
