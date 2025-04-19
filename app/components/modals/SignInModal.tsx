"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SignInModal({
  signInOpen,
  setSignInOpen,
}: {
  signInOpen: boolean;
  setSignInOpen: (open: boolean) => void;
}) {
  return (
    <Transition appear show={signInOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setSignInOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30"
            style={{ marginTop: "0px" }}
          />
        </Transition.Child>

        <div
          className="fixed inset-0 overflow-y-auto"
          style={{ marginTop: "0px" }}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[500px] h-[607px] transform overflow-hidden rounded-xl bg-white px-12 py-8 text-left align-middle shadow-black/30 shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setSignInOpen(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex flex-col my-6">
                    <Image
                      src="/img/Tripadvisor_logoset_solid_green.svg"
                      alt="Tripadvisor Icon"
                      className="mb-4"
                      width={48}
                      height={48}
                    />

                    <Dialog.Title
                      as="h2"
                      className="!text-[28px] font-bold !leading-tight"
                    >
                      Sign in to unlock the <br></br>best of Tripadvisor.
                    </Dialog.Title>
                  </div>
                  <div className="mt-8 space-y-6 flex-1">
                    <button className="w-full border-2 border-black rounded-full py-2.5 px-6 flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors">
                      <Image
                        src="/img/google-icon.png"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                      <span className="text-base font-bold flex-1 -ml-6">
                        Continue with Google
                      </span>
                    </button>

                    <button className="w-full border-2 border-black rounded-full py-2.5 px-6 flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-base font-bold flex-1 -ml-6">
                        Continue with email
                      </span>
                    </button>
                  </div>
                  <div className="mt-8 text-xs text-center text-gray-600">
                    <p>
                      By proceeding, you agree to our{" "}
                      <a href="#" className="underline font-semibold">
                        Terms of Use
                      </a>{" "}
                      and confirm <br />
                      you have read our{" "}
                      <a href="#" className="underline font-semibold">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                    <p className="mt-2">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a href="#" className="underline font-semibold">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline font-semibold">
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
