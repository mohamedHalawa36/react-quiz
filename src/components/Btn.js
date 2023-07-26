
function Btn({disabled,color,className,clickHandler,children}) {
    return (
      <button
      disabled={disabled} className={`btn rounded-5 ${className} `} onClick={clickHandler}>
        {children}
      </button>
    )
}

export default Btn
