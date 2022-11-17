import { currentTopicName } from "@topics/configs/topic-names";
export default async function () {
  const [router, to, from, next] = arguments;
  const { path, name, fullPath, matched } = to;
  useEventNameStore().setEventName(currentTopicName);
  console.log(router);
  next();
}
