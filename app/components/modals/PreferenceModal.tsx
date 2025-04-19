"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Currency data for the modal
const currencyData = [
  { code: "USD", country: "United States", language: "English" },
  { code: "EUR", country: "Belgique", language: "Français" },
  { code: "GBP", country: "United Kingdom", language: "English" },
  { code: "AUD", country: "Australia", language: "English" },
  { code: "BRL", country: "Brasil", language: "Português" },
  { code: "CAD", country: "Canada (English)", language: "English" },
  { code: "CAD", country: "Canada (Français)", language: "Français" },
  { code: "CLP", country: "Chile", language: "Español" },
  { code: "COP", country: "Colombia", language: "Español" },
  { code: "DKK", country: "Danmark", language: "Dansk" },
  { code: "EUR", country: "Deutschland", language: "Deutsch" },
  { code: "EUR", country: "España", language: "Español" },
  { code: "EUR", country: "France", language: "Français" },
  { code: "HKD", country: "Hong Kong SAR", language: "English" },
  { code: "INR", country: "India", language: "English" },
  { code: "IDR", country: "Indonesia", language: "Indonesia" },
  { code: "EUR", country: "Ireland", language: "English" },
  { code: "EUR", country: "Italia", language: "Italiano" },
  { code: "MYR", country: "Malaysia", language: "English" },
];

// Currency list data
const currencyList = [
  { name: "U.S. Dollars", code: "USD" },
  { name: "Afghan Afghanis", code: "AFN" },
  { name: "Albanian Lek", code: "ALL" },
  { name: "Algerian Dinar", code: "DZD" },
  { name: "Angolan Kwanza", code: "AOA" },
  { name: "Argentine Peso", code: "ARS" },
  { name: "Armenian Dram", code: "AMD" },
  { name: "Aruban Guilders", code: "AWG" },
  { name: "Australian Dollars", code: "AUD" },
  { name: "Azerbaijanian Manat", code: "AZN" },
  { name: "Bahamian Dollars", code: "BSD" },
  { name: "Bahraini Dinar", code: "BHD" },
  { name: "Bangladeshi Taka", code: "BDT" },
  { name: "Barbados Dollars", code: "BBD" },
  { name: "Belarussian Rubles", code: "BYN" },
  { name: "Belize Dollars", code: "BZD" },
  { name: "Bermudian Dollars", code: "BMD" },
  { name: "Bhutanese Ngultrum", code: "BTN" },
  { name: "Bolivian Boliviano", code: "BOB" },
  { name: "Bosnia and Herzegovina Convertible Marks", code: "BAM" },
  { name: "Botswana Pula", code: "BWP" },
  { name: "Brazilian Real", code: "BRL" },
  { name: "British Pounds", code: "GBP" },
  { name: "Brunei Dollars", code: "BND" },
  { name: "Bulgarian Lev", code: "BGN" },
];

export default function PreferenceModal({
  preferencesOpen,
  setPreferencesOpen,
}: {
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
}) {
  const [activeTab, setActiveTab] = useState("region");

  return (
    <Transition appear show={preferencesOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setPreferencesOpen(false)}
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
              <Dialog.Panel className="w-full max-w-4xl max-h-[80vh] overflow-y-auto transform overflow-hidden rounded-2xl bg-white p-14 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-5 right-5">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setPreferencesOpen(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Dialog.Title as="h3" className="text-3xl font-[800] mb-2">
                  Preferences
                </Dialog.Title>

                <div className="border-b border-gray-200">
                  <div className="flex space-x-8">
                    <button
                      className={`py-1.5 font-bold text-base border-b-2 ${
                        activeTab === "region"
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("region")}
                    >
                      Region and Language
                    </button>
                    <button
                      className={`py-1.5 font-bold text-base border-b-2 ${
                        activeTab === "currency"
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("currency")}
                    >
                      Currency
                    </button>
                  </div>
                </div>

                <div className="my-6">
                  {activeTab === "region" && (
                    <>
                      <h4 className="text-xl font-bold mb-6">
                        Suggested region and language
                      </h4>

                      <div className="grid grid-cols-5 gap-4 mb-8">
                        <div
                          className={`p-2  rounded-lg cursor-pointer hover:bg-black hover:text-white`}
                        >
                          <div className=" text-sm">United Kingdom</div>
                          <div className="text-gray-400 text-xs">English</div>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold mb-6">
                        Choose a region and language
                      </h4>

                      <div className="grid md:grid-cols-5 gap-4">
                        {currencyData.map((item, index) => (
                          <div
                            key={index}
                            className={`p-2 ${
                              index === 0
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            } rounded-lg cursor-pointer ${
                              index === 0
                                ? ""
                                : "hover:bg-black hover:text-white"
                            }`}
                          >
                            <div className=" text-sm">{item.country}</div>
                            <div
                              className={
                                index === 0
                                  ? "text-gray-300 text-xs"
                                  : "text-gray-400 text-xs"
                              }
                            >
                              {item.language}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {activeTab === "currency" && (
                    <>
                      <h4 className="text-xl font-bold mb-6">
                        Choose a currency
                      </h4>

                      <div className="grid md:grid-cols-5 gap-4">
                        {currencyList.map((currency, index) => (
                          <div
                            key={index}
                            className={`p-2 ${
                              currency.code === "USD"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            } rounded-lg cursor-pointer ${
                              currency.code === "USD"
                                ? ""
                                : "hover:bg-black hover:text-white"
                            }`}
                          >
                            <div className="font-semibold text-sm">
                              {currency.name}
                            </div>
                            <div
                              className={
                                currency.code === "USD"
                                  ? "text-gray-300 text-xs"
                                  : "text-gray-500 text-xs"
                              }
                            >
                              {currency.code}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  Any changes to the preferences are optional, and will persist
                  through your user session.
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
