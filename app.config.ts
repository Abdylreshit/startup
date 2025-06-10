export default defineAppConfig({
    ui: {
        skeleton: {
            base: "animate-pulse rounded-md bg-gray-300",
        },
        separator: {
            slots: {
                root: "flex items-center align-center text-center",
                border: "",
                container: "font-medium text-default flex",
                icon: "shrink-0 size-5",
                avatar: "shrink-0",
                avatarSize: "2xs",
                label: "text-sm",
            },
            variants: {
                color: {
                    primary: {
                        border: "border-primary",
                    },
                    secondary: {
                        border: "border-secondary",
                    },
                    success: {
                        border: "border-success",
                    },
                    info: {
                        border: "border-info",
                    },
                    warning: {
                        border: "border-warning",
                    },
                    error: {
                        border: "border-error",
                    },
                    neutral: {
                        border: "border-default",
                    },
                },
                orientation: {
                    horizontal: {
                        root: "w-full flex-row",
                        border: "w-full",
                        container: "mx-3 whitespace-nowrap",
                    },
                    vertical: {
                        root: "h-full flex-col",
                        border: "h-full",
                        container: "my-2",
                    },
                },
                size: {
                    xs: "",
                    sm: "",
                    md: "",
                    lg: "",
                    xl: "",
                },
                type: {
                    solid: {
                        border: "border-solid",
                    },
                    dashed: {
                        border: "border-dashed",
                    },
                    dotted: {
                        border: "border-dotted",
                    },
                },
            },
            compoundVariants: [
                {
                    orientation: "horizontal",
                    size: "xs",
                    class: {
                        border: "border-t",
                    },
                },
                {
                    orientation: "horizontal",
                    size: "sm",
                    class: {
                        border: "border-t-[2px]",
                    },
                },
                {
                    orientation: "horizontal",
                    size: "md",
                    class: {
                        border: "border-t-[3px]",
                    },
                },
                {
                    orientation: "horizontal",
                    size: "lg",
                    class: {
                        border: "border-t-[4px]",
                    },
                },
                {
                    orientation: "horizontal",
                    size: "xl",
                    class: {
                        border: "border-t-[5px]",
                    },
                },
                {
                    orientation: "vertical",
                    size: "xs",
                    class: {
                        border: "border-s",
                    },
                },
                {
                    orientation: "vertical",
                    size: "sm",
                    class: {
                        border: "border-s-[2px]",
                    },
                },
                {
                    orientation: "vertical",
                    size: "md",
                    class: {
                        border: "border-s-[3px]",
                    },
                },
                {
                    orientation: "vertical",
                    size: "lg",
                    class: {
                        border: "border-s-[4px]",
                    },
                },
                {
                    orientation: "vertical",
                    size: "xl",
                    class: {
                        border: "border-s-[5px]",
                    },
                },
            ],
            defaultVariants: {
                color: "neutral",
                size: "xs",
                type: "solid",
            },
        },
        navigationMenu: {
            slots: {
                root: "relative flex gap-2 [&>div]:min-w-0",
                list: "isolate min-w-0",
                label: "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
                item: "min-w-0",
                link: "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
                linkLeadingIcon: "shrink-0 size-4",
                linkLeadingAvatar: "shrink-0",
                linkLeadingAvatarSize: "2xs",
                linkTrailing: "group ms-auto inline-flex gap-1.5 items-center",
                linkTrailingBadge: "shrink-0",
                linkTrailingBadgeSize: "sm",
                linkTrailingIcon:
                    "size-3 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
                linkLabel: "truncate",
                linkLabelExternalIcon: "inline-block size-3 align-top text-dimmed",
                childList: "",
                childItem: "",
                childLink: "group size-full px-3 py-2 rounded-md flex items-start gap-2 text-start",
                childLinkWrapper: "flex flex-col items-start",
                childLinkIcon: "size-5 shrink-0",
                childLinkLabel: "font-semibold text-sm relative inline-flex",
                childLinkLabelExternalIcon: "inline-block size-3 align-top text-dimmed",
                childLinkDescription: "text-sm text-red-600",
                separator: "px-2 h-px bg-border",
                viewportWrapper: "absolute top-full left-0 flex w-full",
                viewport:
                    "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
                content: "",
                indicator:
                    "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
                arrow: "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs",
            },
            variants: {
                color: {
                    primary: {
                        link: "focus-visible:before:ring-primary",
                        childLink: "focus-visible:outline-primary",
                    },
                    secondary: {
                        link: "focus-visible:before:ring-secondary",
                        childLink: "focus-visible:outline-secondary",
                    },
                    success: {
                        link: "focus-visible:before:ring-success",
                        childLink: "focus-visible:outline-success",
                    },
                    info: {
                        link: "focus-visible:before:ring-info",
                        childLink: "focus-visible:outline-info",
                    },
                    warning: {
                        link: "focus-visible:before:ring-warning",
                        childLink: "focus-visible:outline-warning",
                    },
                    error: {
                        link: "focus-visible:before:ring-error",
                        childLink: "focus-visible:outline-error",
                    },
                    neutral: {
                        link: "focus-visible:before:ring-inverted",
                        childLink: "focus-visible:outline-inverted",
                    },
                },
                highlightColor: {
                    primary: "",
                    secondary: "",
                    success: "",
                    info: "",
                    warning: "",
                    error: "",
                    neutral: "",
                },
                variant: {
                    pill: "",
                    link: "",
                },
                orientation: {
                    horizontal: {
                        root: "items-center justify-between",
                        list: "flex items-center",
                        item: "py-2",
                        link: "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
                        childList: "grid p-2",
                        content: "absolute top-0 left-0 w-full",
                    },
                    vertical: {
                        root: "flex-col",
                        link: "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
                        content:
                            "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden",
                    },
                },
                contentOrientation: {
                    horizontal: {
                        viewportWrapper: "justify-center",
                        content:
                            "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]",
                    },
                    vertical: {
                        viewport:
                            "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
                    },
                },
                active: {
                    true: {
                        childLink: "bg-elevated text-highlighted",
                        childLinkIcon: "text-default",
                    },
                    false: {
                        link: "text-black",
                        linkLeadingIcon: "text-black",
                        childLink: [
                            "hover:bg-primary-600 text-default hover:text-white",
                            "transition-colors",
                        ],
                        childLinkIcon: [
                            "text-dimmed group-hover:text-default",
                            "transition-colors",
                        ],
                    },
                },
                disabled: {
                    true: {
                        link: "cursor-not-allowed opacity-75",
                    },
                },
                highlight: {
                    true: "",
                },
                level: {
                    true: "",
                },
                collapsed: {
                    true: "",
                },
            },
            compoundVariants: [
                {
                    orientation: "horizontal",
                    contentOrientation: "horizontal",
                    class: {
                        childList: "grid-cols-2 gap-2",
                    },
                },
                {
                    orientation: "horizontal",
                    contentOrientation: "vertical",
                    class: {
                        childList: "gap-1",
                        content: "w-60",
                    },
                },
                {
                    orientation: "horizontal",
                    highlight: true,
                    class: {
                        link: [
                            "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
                            "after:transition-colors",
                        ],
                    },
                },
                {
                    orientation: "vertical",
                    highlight: true,
                    level: true,
                    class: {
                        link: [
                            "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
                            "after:transition-colors",
                        ],
                    },
                },
                {
                    disabled: false,
                    active: false,
                    variant: "pill",
                    class: {
                        link: [
                            "hover:text-highlighted hover:before:bg-elevated/50",
                            "transition-colors before:transition-colors",
                        ],
                        linkLeadingIcon: ["group-hover:text-default", "transition-colors"],
                    },
                },
                {
                    disabled: false,
                    active: false,
                    variant: "pill",
                    orientation: "horizontal",
                    class: {
                        link: "data-[state=open]:text-highlighted",
                        linkLeadingIcon: "group-data-[state=open]:text-default",
                    },
                },
                {
                    disabled: false,
                    variant: "pill",
                    highlight: true,
                    orientation: "horizontal",
                    class: {
                        link: "data-[state=open]:before:bg-elevated/50",
                    },
                },
                {
                    disabled: false,
                    variant: "pill",
                    highlight: false,
                    active: false,
                    orientation: "horizontal",
                    class: {
                        link: "data-[state=open]:before:bg-elevated/50",
                    },
                },
                {
                    color: "primary",
                    variant: "pill",
                    active: true,
                    class: {
                        link: "text-primary",
                        linkLeadingIcon: "text-primary group-data-[state=open]:text-primary",
                    },
                },
                {
                    color: "neutral",
                    variant: "pill",
                    active: true,
                    class: {
                        link: "text-highlighted",
                        linkLeadingIcon:
                            "text-highlighted group-data-[state=open]:text-highlighted",
                    },
                },
                {
                    variant: "pill",
                    active: true,
                    highlight: false,
                    class: {
                        link: "before:bg-elevated",
                    },
                },
                {
                    variant: "pill",
                    active: true,
                    highlight: true,
                    disabled: false,
                    class: {
                        link: ["hover:before:bg-elevated/50", "before:transition-colors"],
                    },
                },
                {
                    disabled: false,
                    active: false,
                    variant: "link",
                    class: {
                        link: ["hover:text-highlighted", "transition-colors"],
                        linkLeadingIcon: ["group-hover:text-default", "transition-colors"],
                    },
                },
                {
                    disabled: false,
                    active: false,
                    variant: "link",
                    orientation: "horizontal",
                    class: {
                        link: "data-[state=open]:text-highlighted",
                        linkLeadingIcon: "group-data-[state=open]:text-default",
                    },
                },
                {
                    color: "primary",
                    variant: "link",
                    active: true,
                    class: {
                        link: "text-primary",
                        linkLeadingIcon: "text-primary group-data-[state=open]:text-primary",
                    },
                },
                {
                    color: "neutral",
                    variant: "link",
                    active: true,
                    class: {
                        link: "text-highlighted",
                        linkLeadingIcon:
                            "text-highlighted group-data-[state=open]:text-highlighted",
                    },
                },
                {
                    highlightColor: "primary",
                    highlight: true,
                    level: true,
                    active: true,
                    class: {
                        link: "after:bg-primary",
                    },
                },
                {
                    highlightColor: "neutral",
                    highlight: true,
                    level: true,
                    active: true,
                    class: {
                        link: "after:bg-inverted",
                    },
                },
                {
                    orientation: "vertical",
                    collapsed: false,
                    class: {
                        childList: "ms-5 border-s border-default",
                        childItem: "ps-1.5 -ms-px",
                    },
                },
                {
                    orientation: "vertical",
                    collapsed: true,
                    class: {
                        link: "px-1.5",
                    },
                },
            ],
            defaultVariants: {
                color: "primary",
                highlightColor: "primary",
                variant: "pill",
            },
        },
        dropdownMenu: {
            slots: {
                content:
                    "min-w-32 bg-default shadow-lg rounded-md ring ring-default divide-y divide-default overflow-y-auto scroll-py-1 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin)",
                arrow: "fill-default",
                group: "p-1 isolate",
                label: "w-full flex items-center font-semibold text-highlighted",
                separator: "-mx-1 my-1 h-px bg-border",
                item: "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
                itemLeadingIcon: "shrink-0",
                itemLeadingAvatar: "shrink-0",
                itemLeadingAvatarSize: "",
                itemTrailing: "ms-auto inline-flex gap-1.5 items-center",
                itemTrailingIcon: "shrink-0",
                itemTrailingKbds: "hidden lg:inline-flex items-center shrink-0",
                itemTrailingKbdsSize: "",
                itemLabel: "truncate",
                itemLabelExternalIcon: "inline-block size-3 align-top text-dimmed",
            },
            variants: {
                color: {
                    primary: "",
                    secondary: "",
                    success: "",
                    info: "",
                    warning: "",
                    error: "",
                    neutral: "",
                },
                active: {
                    true: {
                        item: "text-highlighted before:bg-elevated",
                        itemLeadingIcon: "text-default",
                    },
                    false: {
                        item: [
                            "cursor-pointer text-default data-highlighted:text-white data-[state=open]:text-highlighted data-highlighted:before:bg-primary-600 data-[state=open]:before:bg-elevated/50",
                            "transition-colors before:transition-colors",
                        ],
                        itemLeadingIcon: [
                            "text-dimmed group-data-highlighted:text-white group-data-[state=open]:text-default",
                            "transition-colors",
                        ],
                    },
                },
                loading: {
                    true: {
                        itemLeadingIcon: "animate-spin",
                    },
                },
                size: {
                    xs: {
                        label: "p-1 text-xs gap-1",
                        item: "p-1 text-xs gap-1",
                        itemLeadingIcon: "size-4",
                        itemLeadingAvatarSize: "3xs",
                        itemTrailingIcon: "size-4",
                        itemTrailingKbds: "gap-0.5",
                        itemTrailingKbdsSize: "sm",
                    },
                    sm: {
                        label: "p-1.5 text-xs gap-1.5",
                        item: "p-1.5 text-xs gap-1.5",
                        itemLeadingIcon: "size-4",
                        itemLeadingAvatarSize: "3xs",
                        itemTrailingIcon: "size-4",
                        itemTrailingKbds: "gap-0.5",
                        itemTrailingKbdsSize: "sm",
                    },
                    md: {
                        label: "p-1.5 text-sm gap-1.5",
                        item: "p-1.5 text-sm gap-1.5",
                        itemLeadingIcon: "size-5",
                        itemLeadingAvatarSize: "2xs",
                        itemTrailingIcon: "size-5",
                        itemTrailingKbds: "gap-0.5",
                        itemTrailingKbdsSize: "md",
                    },
                    lg: {
                        label: "p-2 text-sm gap-2",
                        item: "p-2 text-sm gap-2",
                        itemLeadingIcon: "size-5",
                        itemLeadingAvatarSize: "2xs",
                        itemTrailingIcon: "size-5",
                        itemTrailingKbds: "gap-1",
                        itemTrailingKbdsSize: "md",
                    },
                    xl: {
                        label: "p-2 text-base gap-2",
                        item: "p-2 text-base gap-2",
                        itemLeadingIcon: "size-6",
                        itemLeadingAvatarSize: "xs",
                        itemTrailingIcon: "size-6",
                        itemTrailingKbds: "gap-1",
                        itemTrailingKbdsSize: "lg",
                    },
                },
            },
            compoundVariants: [
                {
                    color: "primary",
                    active: false,
                    class: {
                        item: "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
                        itemLeadingIcon:
                            "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary",
                    },
                },
                {
                    color: "primary",
                    active: true,
                    class: {
                        item: "text-primary before:bg-primary/10",
                        itemLeadingIcon: "text-primary",
                    },
                },
            ],
            defaultVariants: {
                size: "md",
            },
        },
        input: {
            slots: {
                root: "relative inline-flex items-center",
                base: [
                    "w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
                    "transition-colors",
                ],
                leading: "absolute inset-y-0 start-0 flex items-center",
                leadingIcon: "shrink-0 text-dimmed",
                leadingAvatar: "shrink-0",
                leadingAvatarSize: "",
                trailing: "absolute inset-y-0 end-0 flex items-center",
                trailingIcon: "shrink-0 text-dimmed",
            },
            variants: {
                buttonGroup: {
                    horizontal: {
                        root: "group has-focus-visible:z-[1]",
                        base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none",
                    },
                    vertical: {
                        root: "group has-focus-visible:z-[1]",
                        base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none",
                    },
                },
                size: {
                    xs: {
                        base: "px-2 py-1 text-xs gap-1",
                        leading: "ps-2",
                        trailing: "pe-2",
                        leadingIcon: "size-4",
                        leadingAvatarSize: "3xs",
                        trailingIcon: "size-4",
                    },
                    sm: {
                        base: "px-2.5 py-1.5 text-xs gap-1.5",
                        leading: "ps-2.5",
                        trailing: "pe-2.5",
                        leadingIcon: "size-4",
                        leadingAvatarSize: "3xs",
                        trailingIcon: "size-4",
                    },
                    md: {
                        base: "px-2.5 py-1.5 text-sm gap-1.5",
                        leading: "ps-2.5",
                        trailing: "pe-2.5",
                        leadingIcon: "size-5",
                        leadingAvatarSize: "2xs",
                        trailingIcon: "size-5",
                    },
                    lg: {
                        base: "px-3 py-2 text-sm gap-2",
                        leading: "ps-3",
                        trailing: "pe-3",
                        leadingIcon: "size-5",
                        leadingAvatarSize: "2xs",
                        trailingIcon: "size-5",
                    },
                    xl: {
                        base: "px-3 py-2 text-base gap-2",
                        leading: "ps-3",
                        trailing: "pe-3",
                        leadingIcon: "size-6",
                        leadingAvatarSize: "xs",
                        trailingIcon: "size-6",
                    },
                },
                variant: {
                    outline: "text-highlighted bg-default ring ring-inset ring-accented",
                    soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
                    subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
                    ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
                    none: "text-highlighted bg-transparent",
                },
                color: {
                    primary: "",
                    secondary: "",
                    success: "",
                    info: "",
                    warning: "",
                    error: "",
                    neutral: "",
                },
                leading: {
                    true: "",
                },
                trailing: {
                    true: "",
                },
                loading: {
                    true: "",
                },
                highlight: {
                    true: "",
                },
                type: {
                    file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
                },
            },
            compoundVariants: [
                {
                    color: "primary",
                    variant: ["outline", "subtle"],
                    class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
                },
                {
                    color: "primary",
                    highlight: true,
                    class: "ring ring-inset ring-primary",
                },
                {
                    color: "neutral",
                    variant: ["outline", "subtle"],
                    class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted",
                },
                {
                    color: "neutral",
                    highlight: true,
                    class: "ring ring-inset ring-inverted",
                },
                {
                    leading: true,
                    size: "xs",
                    class: "ps-7",
                },
                {
                    leading: true,
                    size: "sm",
                    class: "ps-8",
                },
                {
                    leading: true,
                    size: "md",
                    class: "ps-9",
                },
                {
                    leading: true,
                    size: "lg",
                    class: "ps-10",
                },
                {
                    leading: true,
                    size: "xl",
                    class: "ps-11",
                },
                {
                    trailing: true,
                    size: "xs",
                    class: "pe-7",
                },
                {
                    trailing: true,
                    size: "sm",
                    class: "pe-8",
                },
                {
                    trailing: true,
                    size: "md",
                    class: "pe-9",
                },
                {
                    trailing: true,
                    size: "lg",
                    class: "pe-10",
                },
                {
                    trailing: true,
                    size: "xl",
                    class: "pe-11",
                },
                {
                    loading: true,
                    leading: true,
                    class: {
                        leadingIcon: "animate-spin",
                    },
                },
                {
                    loading: true,
                    leading: false,
                    trailing: true,
                    class: {
                        trailingIcon: "animate-spin",
                    },
                },
            ],
            defaultVariants: {
                size: "md",
                color: "primary",
                variant: "outline",
            },
        },
    },
});
