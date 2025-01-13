import estilos from "./BurguerIcon.module.css";

export default function BurguerIcon() {
  return (
    <>
      <div data-testid="menu-burguer" className={estilos.hamburguer}>
        <div className={`${estilos.burguer}`} />
        <div className={`${estilos.burguer}`} />
        <div className={`${estilos.burguer}`} />
      </div>
    </>
  );
}
