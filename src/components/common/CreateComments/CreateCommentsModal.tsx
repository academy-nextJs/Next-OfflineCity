import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useForm } from "@tanstack/react-form";
import { Input } from "@heroui/react";
import axiosInstance from "@/utils/services/interceptor/axios";
import localStorage from "redux-persist/es/storage";

interface Values {
  title: string;
  caption: string;
  rating: number;
}

interface Props {
  title : string;
}

export default function CreateCommentsModal({title}:Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const form = useForm<Values, any, any, any, any, any, any, any, any, any>({
    defaultValues: {
      title: "",
      caption: "",
      rating: 0,
    },
    onSubmit: async ({ value }) => {
     
        
         axiosInstance.post('/houses/5/comments' , value , {
          headers: {
            Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNCIsImVtYWlsIjoicmljaHByb2Zlc3NvcjIwMDBAZ21haWwuY29tIiwicm9sZSI6ImJ1eWVyIiwibmFtZSI6ItmG2KfZhSDaqdin2LHYqNixIiwicHJvZmlsZVBpY3R1cmUiOm51bGwsImlhdCI6MTc0NzI5NzU4MywiZXhwIjoxNzQ3Mjk4NDgzfQ.oXzQGxsDD9g4aqFEwSsZPRiUyT8GrQ3_lrLgSDRA1zY'}` ,
            'Content-Type' : 'application/json'
          }
         })
    }, 
  });
  return (
    <>
      <button onClick={onOpen}> {title} </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                       {title}  را ثبت کنید 
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                  }}
                >
                  <div className="pt-3">
                    <form.Field
                      name="title"
                      children={(field) => (
                        <Input
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          key="outside"
                          label="عنوان"
                          labelPlacement="outside"
                          placeholder=" عنوان خود را مشخص کنید"
                        />
                      )}
                      validators={{
                        onChange: ({ value }) =>
                          !value ? "نام الزامی است " : undefined,
                      }}
                    />
                  </div>
                  <div className="pt-3">
                    <form.Field
                      name="caption"
                      children={(field) => (
                        <Input
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          key="outside"
                          label="توضیحات"
                          labelPlacement="outside"
                          placeholder=" توضیحات خود را مشخص کنید"
                        />
                      )}
                      validators={{
                        onChange: ({ value }) =>
                          !value ? "نام الزامی است " : undefined,
                      }}
                    />
                  </div>
                  <div className="pt-3">
                    <form.Field
                      name="rating"
                      children={(field) => (
                        <Input
                          type="number"
                          value={
                            field.state.value !== undefined
                              ? String(field.state.value)
                              : ""
                          }
                          onBlur={field.handleBlur}
                          onChange={(e) =>
                            field.handleChange(Number(e.target.value))
                          }
                          key="outside"
                          label="نمره"
                          labelPlacement="outside"
                          placeholder=" نمره خود را مشخص کنید"
                          className=""
                        />
                      )}
                      validators={{
                        onChange: ({ value }) =>
                          !value ? "نام الزامی است " : undefined,
                      }}
                    />
                  </div>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => form.handleSubmit()}
                    >
                      بده برعه
                    </button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
