interface ItemProps {
  class?: string;
}

export default (props: ItemProps) => {
  const { class: className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24.00 24.00"
      class={`icon icon-tabler ${className || "w-5 h-5"}`}
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="2.0"
      fill="none"      
  >    
    <path d="M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V16M5.5 8C5.5 10.2091 7.29086 12 9.5 12H16M5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16ZM16 12C16 13.3807 17.1193 14.5 18.5 14.5C19.8807 14.5 21 13.3807 21 12C21 10.6193 19.8807 9.5 18.5 9.5C17.1193 9.5 16 10.6193 16 12Z"
     stroke-linecap="round" stroke-linejoin="round"
     />
  </svg>

  );
};