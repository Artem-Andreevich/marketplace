import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion" 


export const Dropdown = ({children}: any) => {

    const scope = useRef<HTMLDivElement>(null);
    const isInView = useInView(scope)
    const staggerDropdownItems = stagger(0.1, { startDelay: 0.1 });
	
	const [open, setOpen] = useState(false)
	
    useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (scope.current && !scope.current.contains(event.target as Node)) {
				setOpen(false)
			  }
		  }
		  document.body.addEventListener('click', handleClickOutside)
		  return () => document.body.removeEventListener('click', handleClickOutside)
	},[])

    useEffect(() => {
        if (!isInView && open) {
          setOpen(false)
        }
     }, [isInView])

	useEffect(() => {
		// animate(".sort-dropdown::after", { rotate: open ? 180 : 0 }, { duration: 0.2 });
		animate(".sort-dropdown",
			{borderRadius: open
				? "10px 10px 0 0"
				: "10px 10px 10px 10px"
			}
		)
		animate(".my-drop-content",
            open ? 
                {
                    clipPath: "inset(0% 0% 0% 0% round 0px 0px 10px 10px)",
                    opacity: 1
                } :
                {
                    clipPath: "inset(0% 0% 100% 0% round 0px 0px 10px 10px)",
                    opacity: 0
                },

			{
				type: "spring",
				bounce: 0,
				delay: 0.1,
			}
		)

		animate(".my-drop-content > li",
			open
				? { opacity: 1, scale: 1}
				: { opacity: 0, scale: 1},
			{
				duration: 0.1,
				delay: open ? staggerDropdownItems : 0,
			}
		)
	}, [open])



    return (
        <div className="my-drop" ref={scope}>
            <motion.button 
                className={open ? "sort-dropdown active" : "sort-dropdown"}
                onClick={() => setOpen(!open)}
            >
                <span>Сортировка</span>
                <span className="bold">Сначала дешевле</span>
            </motion.button>

            <motion.ul className="my-drop-content">
                {children}
            </motion.ul>
        </div>
    )
}
