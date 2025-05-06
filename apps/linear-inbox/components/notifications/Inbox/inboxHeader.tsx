import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import * as React from "react";

interface InboxHeaderProps {
  className?: string;
}

const MoreIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
);

const FilterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
    />
  </svg>
);

const DisplayIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 10.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 14v-3a.5.5 0 0 1 .5-.5h1Zm-2.5 1V13H1.75a.75.75 0 0 1 0-1.5H7Zm7.25 0a.75.75 0 0 1 0 1.5H11v-1.5h3.25ZM5.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM3 7.25v1.5H1.75a.75.75 0 0 1 0-1.5H3Zm11.25 0a.75.75 0 0 1 0 1.5H7v-1.5h7.25Zm-2.75-5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM9 3v1.5H1.75a.75.75 0 0 1 0-1.5H9Zm5.25 0a.75.75 0 0 1 0 1.5H13V3h1.25Z"
    />
  </svg>
);

const MarkAllReadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.591 1a3 3 0 0 1 2.93 2.352l1.36 6.15c.08.355.119.717.119 1.08v1.936A2.482 2.482 0 0 1 12.518 15H3.482A2.482 2.482 0 0 1 1 12.518v-1.935a5 5 0 0 1 .118-1.08L2.48 3.351A3 3 0 0 1 5.41 1h5.182Zm0 1.5H5.41a1.5 1.5 0 0 0-1.465 1.176l-1.361 6.15-.035.184H5.01c.549 0 .993.445.993.993 0 .549.444.993.993.993h2.063a.993.993 0 0 0 .993-.993c0-.548.444-.992.993-.992h2.408a3.48 3.48 0 0 0-.036-.185l-1.361-6.15A1.5 1.5 0 0 0 10.591 2.5Zm-.64 1.988a.75.75 0 0 1 1.06-.036.736.736 0 0 1 .034 1.048L7.548 9.262a.75.75 0 0 1-1.116-.023l-1.5-1.741a.75.75 0 1 1 1.136-.979l.954 1.108 2.93-3.139Z"></path>
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5914 1C11.9984 1 13.2164 1.97789 13.5205 3.35169L14.8819 9.50233C14.9604 9.85714 15 10.2195 15 10.5829V12.5181C15 13.8888 13.8888 15 12.5181 15H3.48193C2.1112 15 1 13.8888 1 12.5181V10.5829C1 10.2195 1.03962 9.85714 1.11815 9.50233L2.47949 3.35169C2.78356 1.97789 4.00156 1 5.4086 1H10.5914ZM10.5914 2.5H5.4086C4.70508 2.5 4.09608 2.98894 3.94405 3.67584L2.5827 9.82649L2.548 10.01L5.01028 10.0108C5.55851 10.0108 6.00293 10.4552 6.00293 11.0034C6.00293 11.5517 6.44735 11.9961 6.99557 11.9961H9.05948C9.6077 11.9961 10.0521 11.5517 10.0521 11.0034C10.0521 10.4552 10.4965 10.0108 11.0448 10.0108L13.4528 10.0102C13.4426 9.94867 13.4308 9.88742 13.4173 9.82649L12.056 3.67584C11.9039 2.98894 11.2949 2.5 10.5914 2.5ZM6.44621 3.89705L6.53033 3.96967L8 5.439L9.46967 3.96967C9.76256 3.67678 10.2374 3.67678 10.5303 3.96967C10.8232 4.26256 10.8232 4.73744 10.5303 5.03033L9.061 6.5L10.5303 7.96967C10.8232 8.26256 10.8232 8.73744 10.5303 9.03033C10.2641 9.2966 9.8474 9.3208 9.55379 9.10295L9.46967 9.03033L8 7.561L6.53033 9.03033C6.23744 9.32322 5.76256 9.32322 5.46967 9.03033C5.17678 8.73744 5.17678 8.26256 5.46967 7.96967L6.939 6.5L5.46967 5.03033C5.17678 4.73744 5.17678 4.26256 5.46967 3.96967C5.73594 3.7034 6.1526 3.6792 6.44621 3.89705Z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OrderingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.11178 5.47685L3.41158 2.29526C3.47069 2.20569 3.55321 2.13084 3.65174 2.0771C3.98321 1.8963 4.41316 1.99402 4.61204 2.29537L6.91183 5.47695C6.97719 5.5759 7.01172 5.68914 7.01172 5.80455C7.01172 6.15598 6.69848 6.44087 6.31191 6.44087H5.43559C5.33934 6.44122 5.06164 6.51245 5.06203 6.59995V13.0319C5.06203 13.559 4.59197 13.9863 4.01212 13.9863C3.43227 13.9863 2.96222 13.559 2.96222 13.0319L2.96222 6.59995C2.96222 6.51209 2.68389 6.44087 2.58725 6.44087H1.71233C1.58514 6.44097 1.46032 6.40955 1.35129 6.35C1.01993 6.16901 0.912701 5.77809 1.11178 5.47685Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8999 10.5095L12.6001 13.6911C12.541 13.7806 12.4585 13.8555 12.36 13.9092C12.0285 14.09 11.5986 13.9923 11.3997 13.691L9.09989 10.5094C9.03453 10.4104 9 10.2972 9 10.1818C9 9.83034 9.31324 9.54546 9.6998 9.54546H10.5761C10.6724 9.5451 10.9501 9.47388 10.9497 9.38638L10.9497 2.95448C10.9497 2.42733 11.4198 2 11.9996 2C12.5794 2 13.0495 2.42733 13.0495 2.95448L13.0495 9.38638C13.0495 9.47423 13.3278 9.54546 13.4245 9.54546H14.2994C14.4266 9.54536 14.5514 9.57678 14.6604 9.63633C14.9918 9.81732 15.099 10.2082 14.8999 10.5095Z"
    />
  </svg>
);

const defaultFilterOptions = [
  {
    label: "Notification type",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 5.25C1 2.90279 2.90279 1 5.25 1H7.25C7.66421 1 8 1.33579 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H5.25C3.73122 2.5 2.5 3.73122 2.5 5.25V10.75C2.5 12.2688 3.73122 13.5 5.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V8.75287C13.5 8.33865 13.8358 8.00287 14.25 8.00287C14.6642 8.00287 15 8.33865 15 8.75287V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25Z"
        ></path>
        <path d="M15 3.5C15 4.88071 13.8807 6 12.5 6C11.1193 6 10 4.88071 10 3.5C10 2.11929 11.1193 1 12.5 1C13.8807 1 15 2.11929 15 3.5Z"></path>
      </svg>
    ),
    options: [
      { label: "All notifications", count: 0 },
      { label: "Assignments", count: 0 },
      { label: "Comments and replies", count: 0 },
      { label: "Document changes", count: 0 },
      { label: "Mentions", count: 0 },
      { label: "Reminders and deadlines", count: 0 },
      { label: "Status changes", count: 0 },
      { label: "Project updates", count: 0 },
      { label: "Team mentions", count: 0 },
      { label: "Issue updates", count: 0 },
    ],
  },
  {
    label: "Subscription",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 13h4a2 2 0 0 1-3.995.15L6 13h4-4ZM8 1a4 4 0 0 1 4 4v3.03l1.684 1.578a1 1 0 0 1 .316.73V11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.662a1 1 0 0 1 .316-.73L4 8.03V5a4 4 0 0 1 4-4Z"></path>
      </svg>
    ),
    options: [
      { label: "All subscriptions", count: 0 },
      { label: "Watching", count: 0 },
      { label: "Participating", count: 0 },
      { label: "Mentioned", count: 0 },
      { label: "Team mentions", count: 0 },
      { label: "Custom", count: 0 },
    ],
  },
  {
    label: "Team",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 10c2.338 0 3.6.475 3.972 1.424a.43.43 0 0 1 .028.157.419.419 0 0 1-.419.419H4.419A.419.419 0 0 1 4 11.581a.43.43 0 0 1 .028-.157C4.399 10.474 5.662 10 8 10Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 5.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C3.28 1 4.12 1 5.8 1h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C15 3.28 15 4.12 15 5.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C12.72 15 11.88 15 10.2 15H5.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C1 12.72 1 11.88 1 10.2V5.8Zm4.8-3.3h4.4c.865 0 1.423.001 1.848.036.408.033.559.09.633.127a1.5 1.5 0 0 1 .655.656c.038.074.095.225.128.633.035.425.036.983.036 1.848v4.4c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036H5.8c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1 .656-.656c.074-.037.225-.094.633-.127C4.377 2.5 4.935 2.5 5.8 2.5Z"
        ></path>
      </svg>
    ),
    options: [
      { label: "All teams", count: 0 },
      { label: "Engineering", count: 0 },
      { label: "Design", count: 0 },
      { label: "Product", count: 0 },
      { label: "Marketing", count: 0 },
      { label: "Sales", count: 0 },
      { label: "Support", count: 0 },
    ],
  },
  {
    label: "Project",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="m11.927 13.232-1.354.78c-.937.54-1.406.811-1.904.917a3.22 3.22 0 0 1-1.338 0c-.498-.106-.967-.376-1.904-.917l-1.354-.78c-.937-.541-1.406-.811-1.747-1.19a3.212 3.212 0 0 1-.669-1.157C1.5 10.401 1.5 9.861 1.5 8.78V7.22c0-1.082 0-1.622.157-2.106.14-.429.368-.823.67-1.157.34-.379.809-.649 1.746-1.19l1.354-.78c.937-.54 1.406-.811 1.904-.917a3.22 3.22 0 0 1 1.338 0c.498.106.967.376 1.904.917l1.354.78c.937.541 1.406.811 1.747 1.19.301.334.53.728.669 1.157.157.484.157 1.024.157 2.106v1.56c0 1.082 0 1.622-.157 2.106-.14.429-.368.823-.67 1.157-.34.379-.809.649-1.746 1.19Zm-5.751-.52-1.353-.78c-1.025-.591-1.239-.734-1.383-.894a1.712 1.712 0 0 1-.356-.617C3.017 10.217 3 9.962 3 8.78V7.22c0-.378.002-.661.006-.878l3.021 1.51a2.25 2.25 0 0 1 1.224 2.002v3.457a23.16 23.16 0 0 1-1.075-.597Zm2.575.597c.212-.105.532-.284 1.073-.596l1.353-.78c1.026-.592 1.239-.735 1.383-.895.16-.178.282-.389.356-.617.066-.204.084-.459.084-1.642V7.22c0-.378-.002-.661-.006-.878l-3 1.5-.007.003a2.25 2.25 0 0 0-1.236 2.009v3.456Zm3.757-8.402L9.324 6.499l-.01.004-.307.154a2.25 2.25 0 0 1-2.013 0l-.29-.145-.026-.013-3.186-1.593c.15-.143.42-.315 1.33-.84l1.354-.78c1.025-.592 1.256-.705 1.467-.75.235-.05.479-.05.714 0 .211.045.442.158 1.467.75l1.353.78c.912.525 1.181.697 1.331.84Z"
        ></path>
      </svg>
    ),
    options: [
      { label: "All projects", count: 0 },
      { label: "Web App", count: 0 },
      { label: "Mobile App", count: 0 },
      { label: "API", count: 0 },
      { label: "Documentation", count: 0 },
      { label: "Infrastructure", count: 0 },
      { label: "Design System", count: 0 },
    ],
  },
  {
    label: "Initiative",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 2.5a5.5 5.5 0 0 0-5.213 7.26.75.75 0 0 1-1.42.48 7 7 0 1 1 13.268 0 .75.75 0 0 1-1.423-.48A5.5 5.5 0 0 0 8 2.5Z"></path>
        <path d="m3.617 13.771 3.724-6.385a.755.755 0 0 1 1.318 0l3.724 6.385c.408.7-.33 1.515-1.022 1.13l-3.24-1.805a.248.248 0 0 0-.242 0l-3.24 1.805c-.693.385-1.43-.43-1.022-1.13Z"></path>
      </svg>
    ),
    options: [
      { label: "All initiatives", count: 0 },
      { label: "Q1 Goals", count: 0 },
      { label: "Q2 Goals", count: 0 },
      { label: "Q3 Goals", count: 0 },
      { label: "Q4 Goals", count: 0 },
      { label: "Annual Goals", count: 0 },
      { label: "Strategic Projects", count: 0 },
    ],
  },
  {
    label: "Issue priority",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6" y="5" width="3" height="9" rx="1"></rect>
        <rect x="11" y="2" width="3" height="12" rx="1"></rect>
      </svg>
    ),
    options: [
      { label: "All priorities", count: 0 },
      { label: "Urgent", count: 0 },
      { label: "High", count: 0 },
      { label: "Medium", count: 0 },
      { label: "Low", count: 0 },
      { label: "No priority", count: 0 },
    ],
  },
  {
    label: "Issue status",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="12"
          height="12"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        ></rect>
        <path
          fill="currentColor"
          stroke="none"
          d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 0 z"
          transform="translate(3.5,3.5)"
        ></path>
      </svg>
    ),
    options: [
      { label: "All statuses", count: 0 },
      { label: "Backlog", count: 0 },
      { label: "Todo", count: 0 },
      { label: "In Progress", count: 0 },
      { label: "In Review", count: 0 },
      { label: "Done", count: 0 },
      { label: "Cancelled", count: 0 },
    ],
  },
  {
    label: "Date range",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.5h-8V1.5Z"></path>
        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-10Z"></path>
        <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.5h-8V6.5Z"></path>
      </svg>
    ),
    options: [
      { label: "All time", count: 0 },
      { label: "Today", count: 0 },
      { label: "Yesterday", count: 0 },
      { label: "Last 7 days", count: 0 },
      { label: "Last 30 days", count: 0 },
      { label: "Last 90 days", count: 0 },
      { label: "Custom range", count: 0 },
    ],
  },
];

export function InboxHeader({
  className,
  filterOptions = defaultFilterOptions,
}: InboxHeaderProps & { filterOptions?: typeof defaultFilterOptions }) {
  const [showSnoozed, setShowSnoozed] = React.useState(true);
  const [showRead, setShowRead] = React.useState(true);
  const [showUnreadFirst, setShowUnreadFirst] = React.useState(true);
  const [ordering, setOrdering] = React.useState("movedToInboxAt");
  const [displayProperties, setDisplayProperties] = React.useState([
    "id",
    "status",
  ]);
  const [checkedFilters, setCheckedFilters] = React.useState(() => {
    const state: Record<string, Record<string, boolean>> = {};
    (filterOptions || []).forEach((group) => {
      state[group.label] = {};
      (group.options || []).forEach((opt) => {
        state[group.label][opt.label] = false;
      });
    });
    return state;
  });

  const toggleDisplayProperty = (property: string) => {
    setDisplayProperties((prev) =>
      prev.includes(property)
        ? prev.filter((p) => p !== property)
        : [...prev, property],
    );
  };

  const handleSubOptionToggle = (groupLabel: string, optionLabel: string) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [groupLabel]: {
        ...prev[groupLabel],
        [optionLabel]: !prev[groupLabel][optionLabel],
      },
    }));
  };

  return (
    <header
      className={cn(
        "flex items-center justify-between px-4 py-4 border-b",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <h2 className="text-md font-medium text-muted-foreground">Inbox</h2>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-transparent text-muted-foreground"
                aria-label="Notification actions"
              >
                <MoreIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[302px] p-1.5">
              <button className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium">
                <MarkAllReadIcon />
                <span className="ml-3 flex-1 text-left">Mark all as read</span>
                <span className="flex gap-0.5 text-xs text-muted-foreground">
                  <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                    ⌥
                  </kbd>
                  <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                    U
                  </kbd>
                </span>
              </button>
              <div className="my-1 h-px bg-border" />
              <button className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium">
                <DeleteIcon />
                <span className="ml-3 flex-1 text-left">
                  Delete all notifications
                </span>
              </button>
              <button className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium">
                <DeleteIcon />
                <span className="ml-3 flex-1 text-left">
                  Delete all read notifications
                </span>
                <span className="flex gap-0.5 text-xs text-muted-foreground">
                  <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                    ⇧
                  </kbd>
                  <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                    ⌫
                  </kbd>
                </span>
              </button>
              <button className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium">
                <DeleteIcon />
                <span className="ml-3 flex-1 text-left">
                  Delete notifications for completed issues
                </span>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-transparent text-muted-foreground"
                aria-label="Display options"
              >
                <DisplayIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 p-1.5">
              <div className="flex items-center justify-between py-0.5 px-1.5">
                <span className="text-xs">Show snoozed</span>
                <Switch
                  checked={showSnoozed}
                  onCheckedChange={setShowSnoozed}
                  className="h-4 w-7"
                />
              </div>
              <div className="flex items-center justify-between py-0.5 px-1.5">
                <span className="text-xs">Show read</span>
                <Switch
                  checked={showRead}
                  onCheckedChange={setShowRead}
                  className="h-4 w-7"
                />
              </div>
              <div className="flex items-center justify-between py-0.5 px-1.5">
                <span className="text-xs">Show unread first</span>
                <Switch
                  checked={showUnreadFirst}
                  onCheckedChange={setShowUnreadFirst}
                  className="h-4 w-7"
                />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="pt-0.5 pb-1 text-xs">
                Display properties
              </DropdownMenuLabel>
              <div className="flex gap-1 px-1.5 pb-1">
                <button
                  type="button"
                  className={cn(
                    "px-2 py-0.5 rounded-md border text-[11px] font-medium transition",
                    displayProperties.includes("id")
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-input",
                  )}
                  onClick={() => toggleDisplayProperty("id")}
                >
                  ID
                </button>
                <button
                  type="button"
                  className={cn(
                    "px-2 py-0.5 rounded-md border text-[11px] font-medium transition",
                    displayProperties.includes("status")
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-input",
                  )}
                  onClick={() => toggleDisplayProperty("status")}
                >
                  Status and icon
                </button>
              </div>
              <DropdownMenuSeparator />
              <div className="flex flex-col gap-1 px-1.5 py-0.5">
                <div className="flex items-center gap-1">
                  <OrderingIcon />
                  <span className="text-xs">Ordering</span>
                </div>
                <select
                  value={ordering}
                  onChange={(e) => setOrdering(e.target.value)}
                  className="w-full rounded border px-1 py-0.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="movedToInboxAt">Newest</option>
                  <option value="reverseMovedToInboxAt">Oldest</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-transparent text-muted-foreground"
                aria-label="Add filter"
              >
                <FilterIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[206px] p-2">
              <form
                autoComplete="off"
                className="mb-2 flex items-center gap-2 px-1"
              >
                <input
                  type="text"
                  placeholder="Filter notifications by…"
                  className="flex-1 rounded border px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Filter notifications by…"
                />
                <span className="text-xs text-muted-foreground">
                  <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                    F
                  </kbd>
                </span>
              </form>
              <div className="max-h-48 overflow-auto">
                {(filterOptions || []).map((option, i) => (
                  <DropdownMenuSub key={option.label}>
                    <DropdownMenuSubTrigger className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium">
                      <span className="flex items-center justify-center w-5 h-5">
                        {option.icon}
                      </span>
                      <span className="ml-3 flex-1 text-left">
                        {option.label}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        <ArrowRightIcon />
                      </span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="min-w-[297px] p-2">
                      <form
                        autoComplete="off"
                        className="mb-2 flex items-center gap-2 px-1"
                      >
                        <input
                          type="text"
                          placeholder="Filter…"
                          className="flex-1 rounded border px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label="Filter…"
                        />
                      </form>
                      <div className="max-h-52 overflow-auto">
                        {(option.options || []).map((sub) => (
                          <DropdownMenuCheckboxItem
                            key={sub.label}
                            checked={
                              checkedFilters[option.label]?.[sub.label] || false
                            }
                            onCheckedChange={() =>
                              handleSubOptionToggle(option.label, sub.label)
                            }
                            className="flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium"
                          >
                            {"icon" in sub && (sub as any).icon ? (
                              <span className="flex items-center justify-center w-5 h-5">
                                {(sub as any).icon}
                              </span>
                            ) : null}
                            <span className="ml-1 flex-1 text-left">
                              {sub.label}
                            </span>
                            {typeof sub.count === "number" && (
                              <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                                {sub.count} notifications
                              </span>
                            )}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
