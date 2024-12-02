
import React from 'react'



export const PlanCard = (props) => {
    return (
        <>
            <div className="plan-card-box">
                <div className="plan-card-box-one">
                    <div className="plan-card-heading">{props.title}</div>
                    <div className="plan-card-quality">{props.quality}</div>
                    <div className="plan-card-provided">
                        <div className="plan-card-value">
                            <i class="fa-solid fa-check"></i>
                            <div>{props.value?.one || 'Default Value for One'}</div>
                        </div>
                        <div className="plan-card-value">
                            <i class="fa-solid fa-check"></i>
                            <div>{props.value?.two|| "Default value for two"}</div>
                        </div>

                    </div>
                </div>
                <div className="plan-card-box-two">
                    <div className="plan-card-price">{props.price}</div>
                </div>
            </div>
        </>
    )
}
