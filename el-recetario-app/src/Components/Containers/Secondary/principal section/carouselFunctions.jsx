

export function scrollRigth(ref, values, setScrollValues, leap){
            const newvalueRigth = ref.current.scrollLeft+leap;
            ref.current.scrollBy({
                left: leap,
                behavior: "smooth",
            });
            setScrollValues({
                ...values,
                left: newvalueRigth,

            });
        };
export function arrowRigth(values, callbackFunction){
            if (values.left + values.containerWidth < values.contentWidth){
                return (
                    <i 
                        className="bi bi-chevron-compact-right arrow-active"
                        onClick={ callbackFunction }
                    ></i> 
                );
            }else{
                return (
                        <i 
                            className="bi bi-chevron-compact-right arrow-inactive"
                            onClick={ callbackFunction }
                        ></i> 
                )
            }
            ;
        };
export const scrollLeft = (ref, values, setScrollValues,leap) =>{
            const newvalueleft = ref.current.scrollLeft-leap;
            ref.current.scrollLeft = newvalueleft;
            ref.current.scrollBy({
                left: -leap,
                behavior: "smooth",
            });
            setScrollValues({
                ...values,
                left: newvalueleft,

            });

        };
export function arrowLeft(values, callbackFunction){
            if (values.left > 0 ){
                return(
                    <i 
                        className="bi bi-chevron-compact-left arrow-active"
                        onClick={ callbackFunction }
                    ></i>                
                )
            }else{
                return(
                    <i 
                        className="bi bi-chevron-compact-left arrow-inactive"
                        onClick={ callbackFunction }
                    ></i>                
                )
            };
        };