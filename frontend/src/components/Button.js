function Button({ name, onClick }) {
  return (
    <div className="flex justify-center text-3xl my-8 active:text-slate-500">
      <button onClick={onClick} type="button">
        {name}
      </button>
    </div>
  );
}

export default Button;
