import { A } from '@solidjs/router';

export default function NavItem(props: { label: string; href: string }) {
  return (
    <A href={props.href} class='text-xl font-bold text-white  mx-4'>
      {props.label}
    </A>
  );
}
