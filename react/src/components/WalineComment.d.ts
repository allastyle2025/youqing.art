import { ReactElement } from 'react';

interface WalineCommentProps {
  serverURL: string;
  path: string;
}

declare function WalineComment(props: WalineCommentProps): ReactElement;

export default WalineComment;
