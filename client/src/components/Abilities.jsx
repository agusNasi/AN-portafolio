import Ability from './Ability';

export default function Abilities() {
  return (
    <>
      <h3>HABILIDADES</h3>
      <Ability title={'Html & Css'} percentage={'94%'} id={'html'} />
      <Ability title={'Javascript'} percentage={'87%'} id={'js'} />
      <Ability title={'React JS'} percentage={'91%'} id={'reactJS'} />
      <Ability title={'Base de datos'} percentage={'95%'} id={'bd'} />
    </>
  );
}
