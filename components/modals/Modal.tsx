"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "..";

interface Props {
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;

  onClose: () => void;
  onSubmit: () => void;
}

const Modal: React.FunctionComponent<Props> = ({
  onClose,
  onSubmit,
  actionLabel,
  body,
  disabled,
  footer,
  isOpen,
  secondaryAction,
  secondaryActionLabel,
  title,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    if (disabled) return;

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSecondaryAction = React.useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
      fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
      >
        <div
          className="relative my-6 mx-auto 
            h-full lg:h-auto md:h-auto 
            w-full md:w-4/6 lg:w-3/6 "
        >
          {/* Content */}
          <div
            className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="translate h-full lg:h-auto md:h-auto
            border-0 rounded-lg shadow-lg relative flex flex-col w-full
            bg-white outline-none focus:outline-none
            "
            >
              {/* header */}
              <div className="relative flex items-center justify-center p-6 rounded-t border-b-[1px]">
                {/* close button */}
                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                  <IoMdClose size={18} />
                </button>

                {/* title */}
                <div className="text-lg font-semibold">{title || "Modal Title"}</div>
              </div>

              {/* body */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* buttons */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button label={secondaryActionLabel} outline onClick={handleSecondaryAction} />
                  )}

                  <Button label={actionLabel || "Continue"} onClick={onSubmit} />
                </div>

                {/* footer content */}
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
