import { LinkButton } from "@/g_shared/ui/linkButton";
import { FC } from "react";
import { Props } from "../type";
import { MenuContainer, MenuSelection, Selection } from "./style";

export const FoodMenu: FC<Props> = (props) => {
    return (
        <MenuContainer>
            <MenuSelection>
                <Selection onClick={() => props.onTabChange('frequent')} isActive={props.activeTab === 'frequent'}>
                    <LinkButton isActive={props.activeTab === 'frequent'}>
                        Частые
                    </LinkButton>
                </Selection>

                <Selection onClick={() => props.onTabChange('recently')} isActive={props.activeTab === 'recently'}>
                    <LinkButton isActive={props.activeTab === 'recently'}>
                        Недавние
                    </LinkButton>
                </Selection>
            </MenuSelection>
            {props.activeTab === 'frequent' ? (
                <>показывать часто используемые продукты</>
            ) : null}
            {props.activeTab === 'recently' ? (
                <>показывать то что добавлялось недавно</>
            ) : null}
        </MenuContainer>
    );
}