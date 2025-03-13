import { FC } from "react";
import { Avatar } from "shared/components/avatar";
import { Text } from "shared/components/text";
import { classNames } from "shared/lib/helpers/classNames";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

type CommentCardProps = {
    comment: Comment
    className?: string
}

export const CommentCard:FC<CommentCardProps> = ({ comment, className }) => {
    let style;
    return (
        <div className={classNames(cls.container, {}, [className])}>
            <div className={cls.userInfo}>
                <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} />
                <Text className={cls.userName} title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
};
