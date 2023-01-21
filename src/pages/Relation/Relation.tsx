import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import findRelation from "../../utils/findRelation";
import AppContext from "../../store/AppContext";
import {FaAngleRight} from "react-icons/fa";

const Relation = () => {

    const {state: {peoples}} = useContext(AppContext)
    let [relations, setRelations] = useState<string[][]>([])

    const {source, target} = useParams()

    useEffect(() => {
        if (source && target && peoples) {
            let relationArr = findRelation(peoples, source, target)
            setRelations(relationArr)
        }

    }, [source, target, peoples])



    return (
        <div>
            {!relations.length ? (<h4>
                <div>
                    <h4 className="text-center mt-10">There is no relation between
                        <span className="text-blue-600 font-semibold ml-1">{source}</span> and <span
                            className="text-blue-600 font-semibold">{target}</span>
                    </h4>
                </div>
            </h4>) : (
                <div>

                    <div>
                        <h4 className="text-start mt-10">Relation between
                            <span className="text-blue-600 font-semibold ml-1">{source}</span> and <span
                                className="text-blue-600 font-semibold">{target}</span>
                        </h4>
                    </div>

                    <div className="mt-2">
                        {relations.map(rel=>(
                            <div className="flex items-center gap-x-2">
                                {rel.map((people, index)=>(
                                    <div className="flex items-center gap-x-2 text-blue-600 font-semibold">
                                        {index > 0 && <FaAngleRight /> }
                                        <h4>{people}</h4>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Relation;