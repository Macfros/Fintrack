
interface TabProps{
    label: string;
  background?:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Tab: React.FC<TabProps> = ({
    label,
  background,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
    return (
        <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-80
        hover:border-b-4
        border-b-4
        hover:border-blue-400
        transition
        w-full
        focus:bg-blue-300
        ${background? `bg-${background}` : ''}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
        )
}

export default Tab;