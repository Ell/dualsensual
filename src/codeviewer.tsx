import React from 'react';

import { getAudioDevices, getUserMedia } from "./audio";

export const CodeViewer: React.FC = () => {
  const [audioDevices, setAudioDevices] = React.useState<MediaDeviceInfo[]>();

  React.useEffect(() => {
    (async () => {
      await getUserMedia();
      const devices = await getAudioDevices();

      setAudioDevices(devices);
    })();
  }, []);

  React.useEffect(() => {
    if (!audioDevices) { return; }

    console.dir(audioDevices);
  }, [audioDevices]);

  return (
    <div className="codeviewer">
      {audioDevices && audioDevices.length > 0 && JSON.stringify(audioDevices[0], null, 2)}
    </div>
  )
}
