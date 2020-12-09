#Trying to understand various tree traversals in python. Based on some samples I found on the interwebs

class Node:
   def __init__(self,data):
       self.left = None
       self.right = None
       self.data = data

#all of these use recursion - each is calling itself on the non-root.data. these are all Depth First Searches (DFS)
def inOrder(root):
   if root:
       inOrder(root.left)
       print(root.data)
       inOrder(root.right)

def preOrder(root):
   if root:
       print(root.data)
       preOrder(root.left)
       preOrder(root.right)

def postOrder(root):
   if root:
       postOrder(root.left)
       postOrder(root.right)
       print(root.data)

#the levelOrder traversal below is not recursive but instead must use a queue and is considered a Breadth First Search (BFS)
def levelOrder(root):
    if root:
        queue = []
        queue.append(root)
        while len(queue) != 0:
            next = queue.pop(0)
            print(next.data)
            if next.left: 
                queue.append(next.left)
            if next.right:
                queue.append(next.right)
            
            
    

#making the tree 
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.left.right.left = Node('a')
root.left.right.left.right = Node('b')

#print (inOrder(root))
#4 2 a b 5 1 3
#print (preOrder(root))
#1 2 4 5 a b 3
#print (postOrder(root))
#4 b a 5 2 3 1
print (levelOrder(root))