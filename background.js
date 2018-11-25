// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//   //   console.log(tab);
//   let msg = {
//     txt: "hello"
//   };
//   chrome.tabs.sendMessage(tab.id, msg);
// }

// chrome.bookmarks.getTree(function(itemTree) {
//   itemTree.forEach(function(item) {
//     processNode(item);
//   });
// });

chrome.bookmarks.getTree(BookmarkTree);

function BookmarkTree(tree) {
  let allBookmarks = [];
  function recursive(treeNode) {
    for (let children in treeNode) {
      if (treeNode.hasOwnProperty("children")) {
        recursive(children);
      } else {
        allBookmarks.push(children.url);
      }
    }

    console.log(allBookmarks);
    // treeNode.map(x => {
    //   if (x.children) {
    //     recursive(x);
    //   } else {
    //     allBookmarks.push(x.url);
    //   }
    // });
  }
  recursive(tree[0].children);
  //   console.log(tree[0].children, typeof tree[0].children);
}

//   tree[0].children.map(x => {
//     if (x.children) {
//       x.children.map(y => {
//         if (y.children) {
//           y.children.map(z => {
//             if (z.children) {
//               z.children.map(a => {
//                 if (a.children) {
//                   a.children.map(b => {
//                     if (b.children) {
//                       b.children.map(c => {
//                         if (c.children) {
//                           c.children.map(d => {
//                             console.log("end of the line");
//                           });
//                         } else {
//                           allBookmarks.push(c.url);
//                         }
//                       });
//                     } else {
//                       allBookmarks.push(b.url);
//                     }
//                   });
//                 } else {
//                   allBookmarks.push(a.url);
//                 }
//               });
//             } else {
//               allBookmarks.push(z.url);
//             }
//           });
//         } else {
//           allBookmarks.push(y.url);
//         }
//       });
//     } else {
//       allBookmarks.push(x.url);
//     }
//   });

//   return allBookmarks;

// function processNode(node) {
//   // recursively process child nodes
//   if (node.children) {
//     node.children.forEach(function(child) {
//       processNode(child);
//     });
//   }

//   // print leaf nodes URLs to console
//   if (node.url) {
//     console.log(node.url);
//   }
// }
