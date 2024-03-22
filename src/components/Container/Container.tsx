import { tv } from "tailwind-variants";

const style = tv({
  base: "mx-auto w-[calc(100%-3rem)]",
  variants: {
    size: {
      full: "max-w-full",
      md: "max-w-[1032px]",
      sm: "max-w-[720px]",
    },
  },
  defaultVariants: {
    size: "full",
  },
});

type Props = {
    size?: keyof typeof style.variants.size;
} & React.HTMLAttributes<HTMLDivElement> 

const Container = (props: Props) => {
  const { children, className, size, ...rest } = props;
  return (
    <div className={style({ className, size })} {...rest}>
      {children}
    </div>
  );
};

export default Container;