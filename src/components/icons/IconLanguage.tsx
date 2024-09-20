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
      stroke-width="2.4"
      fill="none"      
  >    
    <path d="M8 12H8.009M11.991 12H12M15.991 12H16" 
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    />
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" 
    stroke-width="1.5"
    />
  </svg>

  );
};
