import React from 'react';

const NbTasks = ({ count }) => {

  let affichage = '';
  if(count === 0){
    affichage = "Aucune tache en cours"
  } else if(count === 1) {
    affichage = `${count} tache en cours`
  }else {
    affichage = `${count} taches en cours`;
  }

  return (
    <div className="nb-tasks">
      <p>{affichage}</p>      
    </div>
  );
};

export default NbTasks;