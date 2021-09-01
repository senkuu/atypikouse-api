import React, { useState } from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import tw, { styled } from "twin.macro";
import "apollo-upload-client";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

/*interface Props {
  offer: Offer;
}*/

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
      uploadFile(file: $file){
        url
      }
    }`

function UploadForm(/*props: Props*/) {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => console.log(data)
  });

  const handleFileChange = e => {
    const file = e.target.files[0];
    if(!file) return;
    uploadFile({ variables: { file }})
  }
  return (
    <Wrapper>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </Wrapper>
  );
}

export default UploadForm;
