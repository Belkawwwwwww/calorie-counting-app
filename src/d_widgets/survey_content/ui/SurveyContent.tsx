import { NutritionBlock } from '@/d_widgets/nutrition_block';
import { PowerPanel } from '@/d_widgets/power_panel';
import { RouteEnum } from '@/g_shared/model';
import { MessageNoResponse } from '@/g_shared/ui/message_no_response';
import { FC } from 'react';
import { Props } from '../type';

export const SurveyContent: FC<Props> = (props) => {
    if (props.responseStatus === 0) {
        return (
            <>
                <PowerPanel />
                <NutritionBlock />
            </>
        );
    } else {
        return <MessageNoResponse href={RouteEnum.TEST} />;
    }
};
