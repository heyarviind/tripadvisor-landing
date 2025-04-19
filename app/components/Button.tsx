import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "commerce" | "light" | "black";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `
    appearance-none
    cursor-pointer
    border-none
    text-decoration-none
    inline-block
    relative
    transition-colors
    duration-100
    ease-[cubic-bezier(0.25,0.1,0,1)]
    rounded-full
    text-center
    font-bold
    w-auto
    ${fullWidth ? "w-full" : ""}
  `;

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-4 py-2.5 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: `
      bg-[#34e0a1] hover:bg-[#29c78d] active:bg-[#29c78d]
      text-black
    `,
    black: `
      bg-black hover:bg-[#333] active:bg-[#545454]
      text-white
    `,
    secondary: `
      bg-white hover:bg-[#f2f2f2] active:bg-[#e0e0e0]
      text-black
      border border-black
    `,
    commerce: `
      bg-[#f2b203] hover:bg-[#fdc735] active:bg-[#f7d36e]
      text-black
    `,
    light: `
      bg-white hover:bg-[#f2f2f2] active:bg-[#e0e0e0]
      text-black
      border border-[#e0e0e0]
    `,
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `
        .replace(/\s+/g, " ")
        .trim()}
      {...props}
    >
      {children}
    </button>
  );
}
