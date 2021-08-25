import React, { Children, useState } from "react";
import tw, { styled } from "twin.macro";

const Button = tw.button` border-black border-2 px-3 py-2 text-lg md:text-lg text-black shadow-md mt-3 mb-2 mr-3 hover:text-gray-800 hover:border-gray-900 font-sans`;
const Container = tw.div`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`;

interface props {
  Title: string;
  Button: string;
  children: React.ReactNode;
}

function ModalContainer(props: props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Button type="button" onClick={() => setShowModal(true)}>
        {props.Button}
      </Button>
      {showModal ? (
        <>
          <Container>
            <div tw="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div tw="flex items-start justify-between p-5 border-2 border-solid border-gray-200 rounded-t-sm">
                  <h3 tw="text-3xl font-semibold">{props.Title}</h3>
                  <button
                    tw="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span tw="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div tw="relative p-6 flex-auto">{props.children}</div>
                {/*footer*/}
                <div tw="flex items-center justify-end p-6 border-2 border-solid border-gray-200 rounded-b-sm">
                  <button
                    tw="text-red-500 bg-transparent	 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    tw="bg-Green-default text-white active:bg-Green-light font-bold uppercase text-sm px-6 py-3 rounded-sm shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </Container>
          <div tw="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalContainer;
