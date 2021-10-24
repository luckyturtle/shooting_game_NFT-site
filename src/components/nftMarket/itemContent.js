import React from 'react';
import ChocoButton from './smallChoco';
import {useHistory} from 'react-router-dom';

import CreateContents from "./createContents";
// import PetContents from "./petContents";

function ItemContent(props) {
  const status = props.router;

  const history = useHistory();
  console.log("status", status);

  const createButtonHandle = () => {
    history.push(`/nft-marketplace/create`);
  };

  const weaponButtonHandle = () => {
    history.push(`/nft-marketplace/weapons`);
  };
  return (
    <div className="mb-5">
      <div className="text-center mt-4 mb-5">
        <ChocoButton text="Eggs" onClick={createButtonHandle} />
        <ChocoButton text="Pets" onClick={weaponButtonHandle} />
      </div>
      <CreateContents />
      {/* {status === "pets" ? <PetContents /> : <EggContents />} */}
    </div>
  );
}

export default ItemContent;