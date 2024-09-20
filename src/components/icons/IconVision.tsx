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
      stroke-width="2"
      fill="none"
  >    
    <polyline class="cls-1" points="1 7 1 1 7 1" />
    <polyline class="cls-1" points="17 1 23 1 23 7" />
    <polyline class="cls-1" points="1 17 1 23 7 23" />
    <polyline class="cls-1" points="17 23 23 23 23 17" />
    <path class="cls-1" d="M22,12A11.54,11.54,0,0,1,2,12a11.54,11.54,0,0,1,20,0Z" />
    <path class="cls-1" d="M22,12A11.54,11.54,0,0,1,2,12a11.54,11.54,0,0,1,20,0Z" />
    <circle class="cls-1" cx="12" cy="12" r="3" />
  </svg>

  );
};
